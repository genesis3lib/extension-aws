/**
 * Genesis3 Module Test Configuration - AWS Extension
 */

module.exports = {
  moduleId: 'extension-aws',
  moduleName: 'AWS Infrastructure',

  scenarios: [
    {
      name: 'aws-basic',
      description: 'Basic AWS infrastructure with S3 and RDS',
      config: {
        moduleId: 'aws-infra',
        kind: 'extension',
        type: 'aws',
        layers: ['ops'],
        enabled: true,
        fieldValues: {
          awsRegion: 'us-east-1',
          enableS3: true,
          enableRDS: true,
          enableElasticBeanstalk: false
        }
      },
      expectedFiles: [
        'ops/aws/s3-config.yaml',
        'ops/aws/rds-config.yaml'
      ]
    },
    {
      name: 'aws-full-stack',
      description: 'Full AWS stack with S3, RDS, and Elastic Beanstalk',
      config: {
        moduleId: 'aws-full',
        kind: 'extension',
        type: 'aws',
        layers: ['ops'],
        enabled: true,
        fieldValues: {
          awsRegion: 'us-west-2',
          enableS3: true,
          enableRDS: true,
          enableElasticBeanstalk: true,
          enableCloudFront: true
        }
      },
      expectedFiles: [
        'ops/aws/s3-config.yaml',
        'ops/aws/rds-config.yaml',
        'ops/aws/elasticbeanstalk-config.yaml'
      ]
    },
    {
      name: 'aws-s3-only',
      description: 'AWS with S3 storage only',
      config: {
        moduleId: 'aws-storage',
        kind: 'extension',
        type: 'aws',
        layers: ['ops'],
        enabled: true,
        fieldValues: {
          awsRegion: 'eu-west-1',
          enableS3: true,
          enableRDS: false,
          enableElasticBeanstalk: false
        }
      },
      expectedFiles: [
        'ops/aws/s3-config.yaml'
      ],
      forbiddenFiles: [
        'ops/aws/rds-config.yaml',
        'ops/aws/elasticbeanstalk-config.yaml'
      ]
    }
  ]
};
