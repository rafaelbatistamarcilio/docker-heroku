pipeline {
    agent {
        dockerfile {
            additionalBuildArgs 'teste-build-jenkins'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}