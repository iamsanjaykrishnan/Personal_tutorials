from bottle import Bottle, route, run, template, request, static_file, get
import os

app = Bottle()
cwd = os.getcwd()



@app.route("/<filename:re:.*\.*>")
def send_static(filename):
    return static_file(filename, root=cwd + '\static\\')


@app.route('/')
def hello(query=0):
    return static_file("index.html", root=cwd + '\static\\')

if __name__ == "__main__":
    app.run(host='localhost', port=8080, debug=True, reloader=True)
