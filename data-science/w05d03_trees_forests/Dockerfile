FROM jcbain/jupyter-bones
RUN apt-get update && apt-get install git -y
WORKDIR /src
COPY ./src/requirements.txt .
RUN pip3 install -r requirements.txt
RUN pip3 install git+git://github.com/mgelbart/plot-classifier.git
COPY . .
CMD ["jupyter-lab", "--port=8888", "--no-browser", "--ip=0.0.0.0", "--allow-root"]