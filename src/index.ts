import {configurations} from "./Config/configurations";
import Server from "./Server";

const server = new Server(configurations);
server.bootstrap().run();