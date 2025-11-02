import time
import os
import json
from flask import Flask, jsonify

app = Flask(__name__)


#call for time
@app.route('/time')
def fet_current_time():
    return {'time': time.time()}

@app.route('/api/cpu')
def fet_cpus():
    cpus_list = []

    path_to_CPUs = r'./data/open-db/CPU/'

    if not os.path.exists(path_to_CPUs):
        return jsonify({"error":"CPU data folder not found"})

    for file_name in [file for file in os.listdir(path_to_CPUs) if file.endswith('.json')]:
        new_path = os.path.join(path_to_CPUs,file_name)

        with open(new_path,'r') as json_file:
            data = json.load(json_file)
            cpus_list.append(data)

    return jsonify(cpus_list)


if __name__ == "__main__":

    from flask_cors import CORS
    CORS(app)

    app.run(debug=True)