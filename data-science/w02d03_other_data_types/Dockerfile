FROM jcbain/jupyter-bones
WORKDIR /src
COPY ./src/requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
COPY ./static/styles.css /.jupyter/custom/custom.css
CMD ["jupyter-lab", "--port=8888", "--no-browser", "--ip=0.0.0.0", "--allow-root"]