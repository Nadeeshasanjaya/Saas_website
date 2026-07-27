pipeline {
  agent any
  
   environment{
    IMAGE_NAME= "nadeesha1/saas-website"
    IMAGE_TAG = "latest"

   }

  stages {
    stage('checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('build react application') {
      steps {
        sh 'npm run build'
      }
    }
    stage('build docker image'){
      steps{
      sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
      sh 'docker tag $IMAGE_NAME:$IMAGE_TAG $IMAGE_NAME:latest'
      }
    }
    stage(' Docker hub login'){
      steps{
        withCredentials([
          usernamePassword(
            credentialsID: 'dockerhub-creds',
            usernameVariable: 'DOCKER_USER'
            passwordVariable: 'DOCKER_PASS'
          )
        ])
        {
          sh ...
           echo "4DOCKER_PSS" | docker login -u "$DOCKE_USER" --password-stdin

           ...


        }


      }

    }
    stage('push docker image'){
      steps{

      sh ...
       docker push $IMAGE_NAME:$IMAGE_TAG
       docker push $IMAGE_NAME:latest

       ...


      }




    }
    stage('clean up'){
   steps{

   sh ...
    docker image prune -f

    ...


   }


    }
  }
  post {
   success{
    echo "build completed successfully"
   }
 
 failure{
 echo 'buid fail'

 }
 always{

  sh 'docker logout || true'
 }
 


  }



}