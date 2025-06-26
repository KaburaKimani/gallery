pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-24'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/KaburaKimani/gallery.git'
            }
        }
        stage('Initial Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    emailext (
                        subject: "Test Failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                        body: "Tests failed in build ${env.BUILD_NUMBER}. Check console at ${env.BUILD_URL}",
                        to: "elizabeth.kimani@student.moringaschool.com"
                    )
                }
            }
        }
            post {
                success {
                    slackSend(
                        channel: '#elizabeth_ip1',
                        color: 'good',
                        message: "🚀Deployment Successful! Build #${env.BUILD_NUMBER} deployed to Render: https://gallery-8ib3.onrender.com",
                        teamDomain: 'DevOps-prjz',
                        tokenCredentialId: 'slack-token',
                        botUser: true
                    )
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}