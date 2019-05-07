waterdata
------------

*Landing page for Water Data for the Nation related projects*

# Welcome to the experimental space of waterdata.usgs.gov!

    ---
labs.waterdata.usgs.gov is where the development team that is putting together the new face of waterdata.usgs.gov will be hosting new services and sometimes user interfaces that, while production grade, may not be the final form that we want to support for a long time.  These services may change or go away at any time.  

# Build and develop with Docker

A Dockerfile and Docker Compose configuration is provided that is capable of running a development server and building the deploy static site which may deployed to Amazon Web Services through a job on a Jenkins job runner.

## Local development

Using `docker-compose`, you may run a development server on http://localhost:1313:

```bash
docker-compose up
```

The default server instance will include draft articles.
```

## Build static site

Using `docker-compose`, the site may be built using the `build` command provided by the container:

```bash
docker-compose run hugo build
```

Additional arguments may be passed to the [**Hugo**](https://gohugo.io/) binary as the last argument:

```bash
docker-compose run hugo build --buildDrafts
```

## Debugging the container

If the need arises, you may run arbitrary commands in the container, such as a bash shell:

```bash
docker-compose run hugo bash -l
```

Disclaimer
----------
This software is preliminary or provisional and is subject to revision. It is being provided to meet the need for timely best science. The software has not received final approval by the U.S. Geological Survey (USGS). No warranty, expressed or implied, is made by the USGS or the U.S. Government as to the functionality of the software and related material nor shall the fact of release constitute any such warranty. The software is provided on the condition that neither the USGS nor the U.S. Government shall be held liable for any damages resulting from the authorized or unauthorized use of the software.
