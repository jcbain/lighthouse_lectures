# Networking with TCP and HTTP

## What is networking
- the transport and exchanging of data between nodes (computers)
- for example, when i type in google.com, i am requesting from google's server to send me the webpage
  - show that it actually sends a get request and the response back from google is their html
- networking involves layers of protocols (sets of rules) for transporting and exchanging data regardless of the underlying hardware.
- These layers are known to IT professionals as OSI (Open Systems Interconnection) layers

- Some of these layers are interesting to know about
  - starting at the bottom, the **physical layer** (hardware involved in sending data via electrical signals, radio waves, lasers...) Your modem would be at this layer as it just connects your network to outside networks. 
  - **data link** layer is the layer responsible for handling lower level exchange of data (wifi)
  - **network** layer, set of protocols to connect one machine to another across the world (the internet) via IP (internet protocol). It is responsible for finding the best physical path between networks as well as breaking up the data from the transport layer into packets (as well as reassembling them on the other end)

- The other layers are good for us to have some idea about
  - The **transport** layer is responsible for facilitating communciations between the two machines. It is also responsible for segmenting out the data from the session layer and reassembling on the recieving end. TCP is built on top of the IP layer which it uses to establish a connection with the recieving machine and the port number to communicate with the appropriate application.(TCP and UDP are popular protocols and make the internet possible).
    - TCP (transmission control protocol) opens a connection between another server and ensures the server is ready to accept incoming data and similarly when the server sends it back it ensures that the client is will to recieve it.
    - UDP (user datagram protocol) starts sending data without ensuring the other medium is ready to accept it. Makes it faster than TCP but less reliable. (good for video streaming and VoIP)
  - The **session** layer is responsible for open and closing processes between applications. It is also responsible for setting checkpoints
  - **Presentation** is responsible for translating the data from the lower levels/application level into a format that the surrounding layers can accept
  - **Application** layer which is the closest to the end user. The layer that we will be at the most. HTTP is a protocol for requesting and modifying resources between computers. HTTP is a combination of a method and an action(path).


## Chat server (TCP server)
- Today we are going to create a tcp chat server in which, a client will connect to the server, write to the server, and the server will be able to write back to the client what the client wrote. In other words, it is parroting the client. 

- in other words, we are going to establish a connection between a server and a client in order to facilitate communcation between the two.

- Ultimately, the server will broadcast what clients say to everyone connected to the client so that we can creat a chat server!

- `00_server.js`