pipeline {

   agent {
    docker {
        image 'node-docker-agent'
        args '-u root -v /var/run/docker.sock:/var/run/docker.sock'
    }
}

    environment {
        IMAGE_NAME = "nadeesha1/saas-website"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Debug Environment') {
            steps {
                sh '''
                    echo "===== Node ====="
                    node --version

                    echo "===== NPM ====="
                    npm --version

                    echo "===== Docker ====="
                    docker --version

                    echo "===== Containers ====="
                    docker ps
                '''
            }
        }


        stage('Install Dependencies') {
            steps {
                sh '''
                    npm ci
                '''
            }
        }


        stage('Build React Application') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }


        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }


        stage('Docker Hub Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {

                    sh '''
                        echo "$DOCKER_PASS" | docker login \
                        -u "$DOCKER_USER" \
                        --password-stdin
                    '''
                }
            }
        }


        stage('Push Image') {
            steps {
                sh '''
                    docker push $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }


        stage('Cleanup') {
            steps {
                sh '''
                    docker image prune -f
                '''
            }
        }
    }


    post {

        success {
            echo "Pipeline completed successfully"
        }

        failure {
            echo "Pipeline failed"
        }

        always {
            sh 'docker logout || true'
        }
    }
}