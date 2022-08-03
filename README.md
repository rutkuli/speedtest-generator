<details>
<summary>Disclaimer!</summary>
  This Project is solely for <b>Education Purpose Only</b>! The current maintainer or the future maintainer will not be responsible for any action done by the end user!
</details>   

# Dependencies used
axios ^0.27.2<br>
md5 ^2.3.0<br>
random-useragent ^0.5.0<br>
yargs ^17.5.1

# How to use it

### Install dependencies
====================

```Terminal
npm install axios md5 random-useragent yargs
```

### Run the file as as described below

### to see all options
====================
```Terminal
node index --help
```
### to use the application
====================
```Terminal
node index --download 5000 --upload 5000 --ping 10 --server (your server id without brackets) --accuracy 8
```
the command values are completely <b>optional</b> if you don't want to put any amounts yourself.<br>
If you want to change the server id to a server near you, visit http://www.speedtest.net/api/embed/trial/config.php

The details gets transferred to Speedtest.net database with the inputed Value

After processing the user retrieves a real speedtest.net result but with fake values!

```In short exploits Ookla Speedtest APIs```

# Note
If you Use it on a remote server then your location in the speedtest result will be of that server only!

Run Locally on WAMP or XAMP server to get your location in the result.

# Example
![alt text](https://www.speedtest.net/result/13492980786.png)


## Author

**[Rutkuli](https://github.com/rutkuli)**

Continue Learning
====================
