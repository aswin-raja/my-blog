# CROPS Development Tool

CROPS is an open-source, cross-platform development framework that leverages Docker Containers. CROPS provides an easily managed, extensible environment that allows you to build binaries for a variety of architectures on Windows, Linux, and Mac OS X hosts.

## Steps to Build a Poky Distribution Using CROPS

### 1. Prepare Your Host Machine and Docker Setup

Make sure you have Docker installed on your host machine. Docker will be used to run the container.

#### Install Docker (if you haven't already):

Follow the official [Docker installation guide](https://docs.docker.com/get-docker/).

### 2. Set Up the Work Directory

In this step, you'll set up a working directory where the Yocto build environment will reside.

#### Create a directory on your host machine (if you haven't already):

```bash
mkdir -p /home/user/yocto-build
```

### 3. Run the CROPS/Poky Docker Container

Now, you're ready to run the CROPS Poky container.

#### Run the Docker container with the proper volume mapping:

If you're on Linux, run the following command:

```bash
docker run --rm -it -v /home/user/yocto-build:/workdir crops/poky --workdir=/workdir
```

`/home/<your-username>/yocto-build:/workdir` binds your host's yocto-build directory to the `/workdir` directory inside the container.
This is where the build files and outputs will be located.   
`--workdir=/workdir` sets the working directory in the container to /workdir, where you’ll perform the build.  

### 4. Set Up the Yocto Build Environment

Inside the running container, you’ll need to set up the Yocto build environment.

#### Clone the Poky repository (if not done already):

Run the following commands inside the container:

```bash
cd /workdir
git clone git://git.yoctoproject.org/poky
cd poky
```
This will clone the Poky repository, which is the base for Yocto Project builds.
