## friendship-card

friendship-card web app provides a seamless process in managing your friend's list.
Short description about your friends helps remembering events such as what do they do? where do you meet? and so on. 


## Project objective

To learn about potential incorporation of Python strength in artificial intelligence and JavaScript strength in web development.
It is built with flaskAPI framework using Python to perform CRUD operation on a backend DB using SQLite,
 and React framework for responsive UI using JavaScript.

This project is also aim to understand the deployment process on [Render](https://render.com/).

## Installation

make sure you're at the project directory.

1. move into the fronted directory and install requirements:
```
cd frontend
npm install
cd ..
```

2. move into the backend directory and install requirements:
```
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

note, use below to deactive virtual environment:
```
deactivate
```

3. Open one terminal and run the backend db server:
```
cd backend
python main.py
```

4. Open another terminal and run the frontend UI:
```
cd frontend
npm run dev
```