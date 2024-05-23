# Author(s): Yee Chuen teoh

from flask import request, jsonify
from config import app, db
from models import Friend

@app.route("/api/friends", methods=["GET"])
def get_friends():
    friends = Friend.query.all()
    response = [friend.to_json() for friend in friends]
    return jsonify(response)

@app.route("/api/friends", methods=["POST"])
def create_friends():
    try:
        data = request.json

        required_fields = ["name", "role", "description", "gender"]
        for field in required_fields:
            if field not in data:
                return jsonify({"message": f"Missing field: {field}"}), 400

        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")

        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
        else:
            img_url = None

        response = Friend(name = name, role = role, description = description, gender = gender, img_url = img_url)

        db.session.add(response)
        db.session.commit()

        return jsonify(response.to_json()), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"message": str(e)}), 500

@app.route("/api/friends/<int:id>", methods = ["DELETE"])
def delete_friend(id):
    try:
        friend = Friend.query.get(id)

        if friend is None:
            return jsonify({"message": f"Friend not found, id: {id}"}), 404
            
        db.session.delete(friend)
        db.session.commit()

        return jsonify({"message": f"Friend deleted. id: {id}"}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": str(e)}), 500

@app.route("/api/friends/<int:id>", methods = ["PATCH"])
def update_friend(id):
    try:
        response = Friend.query.get(id)

        if response is None:
            return jsonify({"message": f"Friend not found, id: {id}"}), 404
            
        data = request.json

        response.name = data.get("name", response.name)
        response.role = data.get("role", response.role)
        response.description = data.get("description", response.description)
        response.gender = data.get("gender", response.gender)
        
        if response.gender == "male":
            response.img_url = f"https://avatar.iran.liara.run/public/boy?username={response.name}"
        elif response.gender == "female":
            response.img_url = f"https://avatar.iran.liara.run/public/girl?username={response.name}"

        db.session.commit()

        return jsonify(response.to_json()), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": str(e)}), 500


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug = True)