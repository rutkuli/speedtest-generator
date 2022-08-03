const { Server } = require("http");
const sendData = require("./utils/utilities");
const argv = require("yargs/yargs")(process.argv.slice(2))
  .option("download", {
    alias: "d",
	default: 5000,
    describe: "Desired download speed as Mbps. (Max: 9999) as Ookla only supports 10Gbs"
  })
  .option("upload", {
    alias: "u",
    describe: "Desired Upload speed as Mbps. (Max: 9999) as Ookla only supports 10Gbs",
	default: 5000,
	type: 'number',
  })
  .option("ping", {
    alias: "p",
    describe: "Desired Inter-Network Groper.",
	default: 10,
	type: 'number',
  })
  .option("server", {
    alias: "s",
    describe: "Nearest server location id find yours from https://c.speedtest.net/speedtest-servers-static.php",
	default: 3729,
	type: 'number',
  })
   .option("accuracy", {
    alias: "a",
    describe: "Desired accuracy (8 recommended)",
	default: 8,
	type: 'number',
  })
  .help().argv;

  (async () => {
    await sendData(argv.download * 1000, argv.upload * 1000, argv.ping, argv.server);
  })();