# Task A: Docker & Kubernetes Task
## A3 - Introduction to Kubernetes

## Tasks:
* Demonstrate the ability to write a simple ingress yml file.
* Use an ingress controller (for example, ingress-nginx) to enable sticky session load-balancing between 2 replicas using cookies
* Define a basic horizontal pod auto-scaler and demonstrates it works as expected for a scaling metric of your choosing

## Setup:
1. Run the following command to start the server 
    ```
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.0/deploy/static/provider/cloud/deploy.yaml
    ```
2. Run the following command to wait for the ingress controller pods within the namespace `ingress-nginx` to all be running
    ```
    kubectl wait --namespace ingress-nginx --for=condition=ready pod \
        --selector=app.kubernetes.io/component=controller --timeout=120s
    ```
3. Run the following command to deploy the images as K8s Deployments, Services and the Ingress
    ```
    cd k8s/development
    kubectl apply -f .
    ```
4. Get the nginx welcome message through querying the following link
    ```
    curl http://kubernetes.docker.internal
    ```