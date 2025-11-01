import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def fet_current_time():
    return {'time': time.time()}