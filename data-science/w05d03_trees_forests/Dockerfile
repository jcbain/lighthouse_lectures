FROM jcbain/jupyter-bones
RUN apt-get update && apt-get install git wget -y
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends tzdata
RUN apt-get install graphviz -y
RUN wget https://repo.anaconda.com/miniconda/Miniconda3-py38_4.11.0-Linux-x86_64.sh
RUN bash Miniconda3-py38_4.11.0-Linux-x86_64.sh -b
RUN rm -rf yes && rm Miniconda3-py38_4.11.0-Linux-x86_64.sh
RUN /root/miniconda3/bin/conda install python-graphviz
WORKDIR /src
COPY ./src/requirements.txt .
RUN pip3 install -r requirements.txt
RUN pip3 install git+git://github.com/mgelbart/plot-classifier.git
COPY . .
CMD ["jupyter-lab", "--port=8888", "--no-browser", "--ip=0.0.0.0", "--allow-root"]