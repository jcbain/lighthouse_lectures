FROM ubuntu:20.04
RUN apt-get update && apt-get -y update
RUN apt-get install -y build-essential python3.8 python3-pip python3-dev
RUN pip3 -q install pip --upgrade
RUN pip3 install jupyterlab
ENV TINI_VERSION v0.6.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /usr/bin/tini
RUN chmod +x /usr/bin/tini
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["jupyter-lab", "--port=8888", "--no-browser", "--ip=0.0.0.0", "--allow-root"]