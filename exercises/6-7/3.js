DbConnection = (function createDbConnection(){
    var connectionId;

    function DbConnection(){
        connectionId = connectionId || parseInt(Math.random() * 100);

        this.getConnectionId = function getConnectionId(){
            return connectionId;
        };
        this.close = function close(){
            connectionId = null;
        };
    };

    return DbConnection;
})();

c = new DbConnection();
console.log(c.getConnectionId());

c = new DbConnection();
console.log(c.getConnectionId());
c.close();
console.log(c.getConnectionId());

c = new DbConnection();
console.log(c.getConnectionId());