pipeline {
  agent none
  stages {
    stage('test') {
      steps {
        sh '''pipeline {
    agent any

    stages {
        stage(\'Build\') {
            steps {
                echo \'Building..\'
            }
        }
        stage(\'Test\') {
            steps {
                echo \'Testing..\'
            }
        }
        stage(\'Deploy\') {
            steps {
                echo \'Deploying....\'
            }
        }
    }
}'''
        }
      }

    }
  }