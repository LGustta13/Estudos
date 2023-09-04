import pg from "pg";

let connectionString = "postgres://postgres:@serverName/ip:port/nameOfDatabase";
var pgClient = new pg.Client(connectionString);
pgClient.connect();