const amqp = require("amqplib")
connect();
async function connect() {
  try {
    const connection = amqp.connect("amqp://localhost:5672");
    const channel = await (await connection).createChannel();

    const result = await channel.assertQueue("jobs");
    console.log(result);
    // channel.sendToQueue("jobs", Buffer.from("Hi it works"));
    // channel.sendToQueue("jobs", Buffer.from("hello this is test"));
    setInterval(() => channel.sendToQueue("jobs", Buffer.from("Đm chó An")),
      1000
    )
    console.log("jobs sent successfully")

  }
  catch (ex) {
    console.error(ex)
  }
}
