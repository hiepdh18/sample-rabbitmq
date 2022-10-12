const amqp = require("amqplib")
connect();
async function connect() {
  try {
    const connection = amqp.connect("amqp://localhost:5672");
    
    const channel = await (await connection).createChannel();

    channel.consume("jobs", msg => {
      console.log(msg.content.toString());
      channel.ack(msg);
    });
  }
  catch (ex) {
    console.error(ex)
  }
  
}