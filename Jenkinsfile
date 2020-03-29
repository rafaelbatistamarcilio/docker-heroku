pipeline {
    agent {
        dockerfile {
            label 'teste-build-jenkins'el
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