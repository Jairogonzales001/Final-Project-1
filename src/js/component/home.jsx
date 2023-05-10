import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
return (

<div className="text-center">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
<img class="navbar-brand text-white" id="logo" src='https://attachment.outlook.live.net/owa/MSA%3Ajairogonzales%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC04NGUyLWQ0OWYtMDACLTAwCgBGAAADGdbxMx0Tr0CGMwHjHFBvSQcATJruLssSL0WEhAC5qjbGRZ8AAAIBDAAAAEya7i7LEi9FhIQAuao2xkWfAAZL%2F%2BU8AAAAARIAEACHc0HBIUd6QZiBDfHWZile&thumbnailType=2&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6IjcyMWFmNjdlMzA5ZDQ4NTZhMmI1M2RhZmI0ZmEwMTMxIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjE4OTk5NDU0MzczNTMxMTlcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCIwMDA2YmZmZC04NGUyLWQ0OWYtMDAwMC0wMDAwMDAwMDAwMDBcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS0yMjI5NDU4MDc5XCJ9IiwibmJmIjoxNjgzMzIxMjA5LCJleHAiOjE2ODMzMjE4MDksImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.Ei95Xtx-Jx7TLiRswtZERkzTIYXZCSQBvdHfEqmfJpOE8AfBXD8IrRAoSeS3v8j3mw7AiNpXSKYqCf0ICb2HzSZcGOMFOSmUJQ-J9WhXYxf1nQX75F9flLhrfQO9NR5VqhKSptcurIxNh6ab7sSqxC0jDEFKNVoHU_9Ub9jVGqbMjlYbVtiORlO5oMF-2NE_gwpSJ20XUuQjZXTio-xJsU_gkiNIMou7cYQLzaBEQKL8qbK8Cmfo6Q0GSbocXwrzXoYInhpFWSyvg6FeZZP033j3wFTD7C7kCZ5taDMNorQjqmp2C9PsFDt52evtY2fLKcNK8wqZVcCeNievkg6YPg&X-OWA-CANARY=09upDhX5rU2ZwVgYSnv4IpAzCQuuTdsYHAlPc9Fet2GgRXBWWj76R7ea6-it6RJoNAQZuIbeYtE.&owa=outlook.live.com&scriptVer=20230428009.10&animation=true'></img>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav ms-auto">
<ul class="navbar-nav">
<li class="nav-item d-flex">
<a class="nav-link active text-white" aria-current="page" href="#">Home</a>
</li>
<li class="nav-item d-flex">
<a class="nav-link text-secondary" href="#">About us</a>
</li>
<li class="nav-item d-flex">
<a class="nav-link text-secondary" href="#">Services</a>
</li>
<li class="nav-item d-flex">
<a class="nav-link text-secondary" href="#" tabindex="-1" aria-disabled="true">Contact</a>
</li>
</ul>
</ul>
</div>
</div>
</nav>
</div>

);
};

export default Home;
