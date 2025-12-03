import time
import os
import json
from flask import Flask, jsonify
from sorting import insertionSort,quickSort

app = Flask(__name__)


#Shoping cart should maintain the chosen componenet and filter based on that and the filter and sorting should work based on that compatible 


#call for time
@app.route('/api/time')
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

@app.route('/api/cpu/sortbyName')
def fet_SortCPUsByName():
    cpus_list = []

    path_to_CPUs = r'./data/open-db/CPU/'

    if not os.path.exists(path_to_CPUs):
        return jsonify({"error":"CPU data folder not found"})

    for file_name in [file for file in os.listdir(path_to_CPUs) if file.endswith('.json')]:
        new_path = os.path.join(path_to_CPUs,file_name)

        with open(new_path,'r') as json_file:
            data = json.load(json_file)
            cpus_list.append(data)
    #start sorting by name:
    #metadata.name

    #cpuName = insertionSort(cpus_list,key=lambda cpu:cpu['metadata']['name'])
    #ans =quickSort(arr,key=lambda item: item['age'])
    cpuName = quickSort(cpus_list,key=lambda cpu:cpu['metadata']['name'])

    return jsonify(cpuName)




if __name__ == "__main__":

    from flask_cors import CORS
    CORS(app)

    app.run(debug=True)