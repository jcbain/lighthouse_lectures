FROM jcbain/jupyter-bones
WORKDIR /src
COPY ./src/requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
CMD ["jupyter-lab", "--port=8888", "--no-browser", "--ip=0.0.0.0", "--allow-root"]