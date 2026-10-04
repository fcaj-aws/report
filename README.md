# 🚀 FCJ Track 2 — Part-time 6-Month DevOps & Cloud Roadmap

> **Mục tiêu:** Từ nền tảng Linux/Networking → Docker → CI/CD → AWS → Terraform → ECS → Observability → High Availability → Production Deployment → FCJ Track 2 Project.
>
> **Thời lượng:** 6 tháng / 24 tuần
> **Hình thức:** Part-time
> **Thời gian:** ~10–12 giờ/tuần
> **Tổng thời lượng:** ~240–288 giờ
> **Project xuyên suốt:** `reluster`
> **Project hỗ trợ:** `spfi`

---

## 📌 Table of Contents

- [🎯 Goal](#-goal)
- [🗺️ Roadmap Overview](#️-roadmap-overview)
- [⏱️ Weekly Schedule](#️-weekly-schedule)
- [📊 Progress Tracking](#-progress-tracking)
- [Phase 0 — Environment](#phase-0--environment)
- [Phase 1 — Linux + Networking + Git](#phase-1--linux--networking--git)
- [Phase 2 — Docker](#phase-2--docker)
- [Phase 3 — CI/CD](#phase-3--cicd)
- [Phase 4 — AWS Core](#phase-4--aws-core)
- [Phase 5 — Terraform + ECS](#phase-5--terraform--ecs)
- [Phase 6 — Observability + HA + Production](#phase-6--observability--ha--production)
- [🏆 Final Project](#-final-project)
- [📚 Resources](#-resources)
- [🧠 Interview Checklist](#-interview-checklist)
- [🏁 Final Definition of Done](#-final-definition-of-done)

---

# 🎯 Goal

## Primary Goal

Sau 6 tháng, có khả năng:

- [ ] Linux administration cơ bản → intermediate
- [ ] Troubleshoot networking
- [ ] Git/GitHub workflow
- [ ] Dockerize application
- [ ] Docker Compose
- [ ] Build CI/CD pipeline
- [ ] Container security scanning
- [ ] AWS fundamentals
- [ ] IAM
- [ ] VPC
- [ ] ECR
- [ ] ECS/Fargate
- [ ] ALB
- [ ] CloudWatch
- [ ] Terraform
- [ ] Prometheus
- [ ] Grafana
- [ ] High Availability
- [ ] Redis replication/failover
- [ ] Rolling deployment
- [ ] Blue/Green deployment
- [ ] Health check
- [ ] Auto Scaling
- [ ] Secrets management
- [ ] Production troubleshooting

---

# 🧭 Learning Philosophy

```text
Theory
  ↓
Lab
  ↓
Break it
  ↓
Debug it
  ↓
Automate it
  ↓
Document it
  ↓
Apply to Project
```

### Learning Ratio

| Activity      | Ratio |
| ------------- | ----: |
| Theory        |   20% |
| Hands-on Lab  |   30% |
| Project       |   40% |
| Documentation |   10% |

> **Rule:** Không học một technology chỉ để "biết nó tồn tại". Phải có lab hoặc project chứng minh.

---

# 🗺️ Roadmap Overview

| Phase |   Duration | Focus                    | Output                    |
| ----- | ---------: | ------------------------ | ------------------------- |
| 0     |     Week 0 | Environment              | DevOps workstation        |
| 1     |   Week 1–4 | Linux + Networking + Git | Foundation                |
| 2     |   Week 5–8 | Docker                   | Containerized application |
| 3     |  Week 9–12 | CI/CD                    | Automated pipeline        |
| 4     | Week 13–16 | AWS Core                 | Cloud architecture        |
| 5     | Week 17–20 | Terraform + ECS          | AWS deployment            |
| 6     | Week 21–24 | Observability + HA       | Production system         |
| Final |    Week 24 | FCJ Project              | Portfolio-ready project   |

---

# ⏱️ Weekly Schedule

Recommended:

```text
Monday       1.5h
Tuesday      1.5h
Wednesday    1.5h
Thursday     1.5h
Friday       Rest
Saturday     3h
Sunday       3h
-----------------
Total       ~12h/week
```

Nếu chỉ có 8h/week:

> Giữ nguyên thứ tự roadmap nhưng kéo dài mỗi phase thêm 25–50%.

---

# 📊 Progress Tracking

## Overall Progress

- [ ] Phase 0 — Environment
- [ ] Phase 1 — Linux + Networking + Git
- [ ] Phase 2 — Docker
- [ ] Phase 3 — CI/CD
- [ ] Phase 4 — AWS
- [ ] Phase 5 — Terraform + ECS
- [ ] Phase 6 — Observability + HA
- [ ] Final Project

## Progress

```text
Phase 0  [ ]  0%
Phase 1  [ ]  0%
Phase 2  [ ]  0%
Phase 3  [ ]  0%
Phase 4  [ ]  0%
Phase 5  [ ]  0%
Phase 6  [ ]  0%

Overall  [ ]  0%
```

---

# PHASE 0 — Environment

> **Duration:** Week 0
> **Estimated time:** 4–6 hours

<details>
<summary><strong>🛠️ Week 0 — Development Environment</strong></summary>

## Objectives

Chuẩn bị workstation để có thể học toàn bộ roadmap.

## Install

- [ ] WSL2
- [ ] Ubuntu
- [ ] Git
- [ ] GitHub CLI
- [ ] Docker
- [ ] Docker Compose
- [ ] VS Code
- [ ] AWS CLI
- [ ] Terraform
- [ ] kubectl
- [ ] jq
- [ ] curl
- [ ] wget
- [ ] make

## Verify

```bash
git --version
docker --version
docker compose version
aws --version
terraform --version
kubectl version --client
curl --version
jq --version
```

## Git Configuration

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --global init.defaultBranch main
```

## Create Learning Repository

```text
fcj-track2-lab/
├── linux/
├── networking/
├── git/
├── docker/
├── github-actions/
├── aws/
├── terraform/
├── ecs/
├── observability/
├── kubernetes/
├── notes/
└── README.md
```

## Deliverables

- [ ] Development environment ready
- [ ] GitHub repository created
- [ ] First commit pushed
- [ ] README initialized

## Definition of Done

> Có thể clone repo trên một máy mới và setup toàn bộ môi trường theo README.

</details>

---

# PHASE 1 — Linux + Networking + Git

> **Duration:** Week 1–4
> **Estimated:** 40–48 hours

---

## 🐧 Week 1 — Linux Fundamentals

<details>
<summary><strong>Expand Week 1</strong></summary>

### Topics

#### Linux Filesystem

- [ ] `/`
- [ ] `/bin`
- [ ] `/boot`
- [ ] `/dev`
- [ ] `/etc`
- [ ] `/home`
- [ ] `/opt`
- [ ] `/proc`
- [ ] `/sys`
- [ ] `/tmp`
- [ ] `/usr`
- [ ] `/var`

#### File Operations

```bash
ls
cd
pwd
cp
mv
rm
mkdir
touch
find
```

#### Text Processing

```bash
cat
less
head
tail
grep
awk
sed
sort
uniq
cut
xargs
```

#### Permissions

```bash
chmod
chown
chgrp
```

Understand:

```text
r = read
w = write
x = execute
```

Examples:

```text
644
755
700
```

#### Shell

- [ ] Variables
- [ ] Environment variables
- [ ] Pipes
- [ ] Redirects
- [ ] `|`
- [ ] `>`
- [ ] `>>`
- [ ] `2>`
- [ ] `&&`
- [ ] `||`

### Labs

- [ ] Create users
- [ ] Create groups
- [ ] Configure permissions
- [ ] Search files
- [ ] Parse logs with grep/awk
- [ ] Write basic bash scripts

### Mini Project

Create:

```text
linux-log-analyzer.sh
```

Requirements:

- [ ] Read log file
- [ ] Count errors
- [ ] Count HTTP status codes
- [ ] Find top error messages
- [ ] Output summary

### Deliverable

```text
linux/
└── week-01/
    ├── notes.md
    ├── commands.md
    ├── exercises/
    └── linux-log-analyzer.sh
```

### Definition of Done

- [ ] Có thể thao tác Linux CLI không cần GUI
- [ ] Hiểu permissions
- [ ] Viết bash script cơ bản
- [ ] Đọc được log

</details>

---

# ⚙️ Week 2 — Process + System Administration

<details>
<summary><strong>Expand Week 2</strong></summary>

## Process

```bash
ps
top
htop
kill
killall
jobs
fg
bg
nice
renice
```

## Services

```bash
systemctl
journalctl
```

Learn:

- [ ] systemd
- [ ] service lifecycle
- [ ] startup
- [ ] restart
- [ ] logs

## Resource Management

CPU:

```bash
top
htop
uptime
```

Memory:

```bash
free -h
```

Disk:

```bash
df -h
du -sh
lsblk
```

## Networking Processes

```bash
ss -lntp
lsof -i
```

## Lab

Create:

```text
my-api.service
```

Requirements:

- [ ] Start
- [ ] Stop
- [ ] Restart
- [ ] Enable on boot
- [ ] Logs
- [ ] Failure recovery

## Troubleshooting Exercise

Simulate:

- [ ] CPU spike
- [ ] Memory leak
- [ ] Disk full
- [ ] Port already in use
- [ ] Service crash

Then document:

```text
Symptom
→ Investigation
→ Root Cause
→ Fix
→ Prevention
```

### Definition of Done

> Có thể troubleshoot một Linux server cơ bản mà không cần restart máy một cách mù quáng.

</details>

---

# 🌐 Week 3 — Networking Fundamentals

<details>
<summary><strong>Expand Week 3</strong></summary>

## Core Concepts

- [ ] IP
- [ ] MAC
- [ ] ARP
- [ ] DNS
- [ ] TCP
- [ ] UDP
- [ ] Port
- [ ] Socket
- [ ] Routing
- [ ] Gateway
- [ ] NAT
- [ ] Firewall
- [ ] Subnet
- [ ] CIDR

## HTTP

Understand:

```text
HTTP
HTTPS
TLS
Request
Response
Headers
Status Code
Cookies
```

## Commands

```bash
ip addr
ip route
ping
curl
ss
dig
nslookup
traceroute
tcpdump
```

## Important Exercise

Explain:

```text
curl https://example.com
```

from:

```text
DNS
 ↓
IP
 ↓
TCP
 ↓
TLS
 ↓
HTTP
 ↓
Response
```

## Lab

- [ ] DNS troubleshooting
- [ ] Port troubleshooting
- [ ] HTTP debugging
- [ ] TCP connection inspection
- [ ] Capture packets with tcpdump

### Definition of Done

> Khi application không connect được database/Redis/API, biết bắt đầu debug từ đâu.

</details>

---

# 🌿 Week 4 — Git + GitHub

<details>
<summary><strong>Expand Week 4</strong></summary>

## Git Fundamentals

```bash
git init
git clone
git status
git add
git commit
git log
git diff
```

## Branching

```bash
git branch
git switch
git merge
git rebase
```

## Advanced

```bash
git stash
git cherry-pick
git reset
git revert
```

## GitHub

- [ ] Pull Request
- [ ] Code Review
- [ ] Issue
- [ ] Release
- [ ] Tag
- [ ] GitHub Actions

## Semantic Versioning

```text
MAJOR.MINOR.PATCH
```

Example:

```text
v1.0.0
v1.1.0
v1.1.1
```

## Lab

Create:

```text
git-workflow-lab
```

Simulate:

```text
main
 ├── feature/a
 ├── feature/b
 └── bugfix/c
```

### Deliverable

- [ ] Branch workflow
- [ ] PR
- [ ] Code review
- [ ] Merge
- [ ] Release tag

### Definition of Done

> Có thể xử lý conflict, rebase, revert và cherry-pick mà không hoảng.

</details>

---

# PHASE 2 — Docker

> **Duration:** Week 5–8
> **Estimated:** 40–48 hours

---

# 🐳 Week 5 — Docker Fundamentals

<details>
<summary><strong>Expand Week 5</strong></summary>

## Concepts

- [ ] Image
- [ ] Container
- [ ] Registry
- [ ] Layer
- [ ] Volume
- [ ] Network
- [ ] Docker daemon

## Commands

```bash
docker pull
docker build
docker run
docker ps
docker exec
docker logs
docker inspect
docker stop
docker rm
docker image
docker volume
docker network
```

## Labs

- [ ] Run Nginx
- [ ] Run Redis
- [ ] Run PostgreSQL
- [ ] Inspect container
- [ ] Read logs
- [ ] Exec into container
- [ ] Create/remove volumes
- [ ] Create Docker network

### Definition of Done

> Có thể giải thích chính xác Image khác Container như thế nào.

</details>

---

# 🧱 Week 6 — Dockerfile

<details>
<summary><strong>Expand Week 6</strong></summary>

## Dockerfile

Learn:

```dockerfile
FROM
WORKDIR
COPY
RUN
ENV
ARG
EXPOSE
USER
CMD
ENTRYPOINT
```

## Best Practices

- [ ] Multi-stage build
- [ ] Non-root user
- [ ] `.dockerignore`
- [ ] Layer optimization
- [ ] Small base image
- [ ] Healthcheck

## Lab

Dockerize a backend.

Requirements:

- [ ] Production Dockerfile
- [ ] Multi-stage
- [ ] Non-root
- [ ] Environment variables
- [ ] Healthcheck
- [ ] `.dockerignore`

## Benchmark

Compare:

```text
Before optimization
After optimization
```

Measure:

- [ ] Image size
- [ ] Build time
- [ ] Startup time

### Definition of Done

> Tự viết Dockerfile production-ready thay vì copy Dockerfile từ tutorial.

</details>

---

# 🌐 Week 7 — Docker Networking + Storage

<details>
<summary><strong>Expand Week 7</strong></summary>

## Networking

- [ ] bridge
- [ ] host
- [ ] container DNS
- [ ] port mapping
- [ ] container-to-container communication

## Storage

- [ ] Volume
- [ ] Bind mount
- [ ] tmpfs

## Lab

Build:

```text
API
├── Redis
└── PostgreSQL
```

Requirements:

- [ ] Separate network
- [ ] Persistent database volume
- [ ] Redis communication
- [ ] Health checks

### Troubleshooting

Break:

- [ ] Wrong port
- [ ] Wrong hostname
- [ ] Missing network
- [ ] Missing volume

Then debug.

### Definition of Done

> Hiểu tại sao container không nên dùng `localhost` để gọi container khác.

</details>

---

# 🧩 Week 8 — Docker Compose

<details>
<summary><strong>Expand Week 8</strong></summary>

## Learn

```yaml
services:
networks:
volumes:
environment:
healthcheck:
depends_on:
secrets:
profiles:
```

## Build Stack

```text
API
│
├── PostgreSQL
├── Redis
├── Prometheus
└── Grafana
```

## Requirements

- [ ] `.env`
- [ ] Healthcheck
- [ ] Persistent volumes
- [ ] Custom network
- [ ] Service dependencies
- [ ] Production profile

### Deliverable

```bash
docker compose up -d
```

should start entire stack.

### Definition of Done

- [ ] Reproducible environment
- [ ] One-command startup
- [ ] Health checks
- [ ] Persistent data

</details>

---

# PHASE 3 — CI/CD

> **Duration:** Week 9–12

---

# 🔄 Week 9 — CI Fundamentals

<details>
<summary><strong>Expand Week 9</strong></summary>

## Concepts

- [ ] CI
- [ ] Continuous Delivery
- [ ] Continuous Deployment
- [ ] Pipeline
- [ ] Runner
- [ ] Artifact
- [ ] Cache
- [ ] Secret
- [ ] Environment

## GitHub Actions

Learn:

```yaml
name:
on:
jobs:
runs-on:
steps:
uses:
run:
with:
env:
```

## Pipeline

```text
Push
 ↓
Lint
 ↓
Test
 ↓
Build
```

### Definition of Done

> Mỗi Pull Request đều tự động chạy CI.

</details>

---

# 🐳 Week 10 — Docker CI/CD

<details>
<summary><strong>Expand Week 10</strong></summary>

Pipeline:

```text
GitHub
 ↓
GitHub Actions
 ↓
Test
 ↓
Docker Build
 ↓
Docker Push
 ↓
GHCR
```

## Tagging

Implement:

- [ ] `latest`
- [ ] branch tag
- [ ] commit SHA
- [ ] release tag

### Lab

- [ ] Build Docker image automatically
- [ ] Push to GHCR
- [ ] Pull image locally
- [ ] Verify image

### Definition of Done

> `git push` → Docker image tự động xuất hiện trên registry.

</details>

---

# 🔐 Week 11 — Security in CI

<details>
<summary><strong>Expand Week 11</strong></summary>

## Security Concepts

- [ ] SAST
- [ ] Dependency scanning
- [ ] Container scanning
- [ ] Secret scanning

## Pipeline

```text
Lint
 ↓
Unit Test
 ↓
SAST
 ↓
Dependency Scan
 ↓
Docker Build
 ↓
Container Scan
```

## Secrets

Never commit:

```text
.env
password
API key
AWS access key
private key
```

### Definition of Done

> Pipeline có thể fail nếu phát hiện vulnerability nghiêm trọng.

</details>

---

# 🚀 Week 12 — Production CI/CD

<details>
<summary><strong>Expand Week 12</strong></summary>

Final pipeline:

```text
Pull Request
     │
     ├── Lint
     ├── Unit Test
     ├── Integration Test
     ├── Security Scan
     └── Build
             │
             ▼
          Merge
             │
             ▼
        Docker Build
             │
             ▼
            GHCR
```

Implement:

- [ ] PR pipeline
- [ ] Main pipeline
- [ ] Release pipeline
- [ ] Docker image tagging
- [ ] GitHub environment
- [ ] Secrets
- [ ] Artifacts

### Definition of Done

> Có một CI/CD pipeline đủ tốt để dùng làm nền tảng production deployment.

</details>

---

# PHASE 4 — AWS CORE

> **Duration:** Week 13–16

---

# ☁️ Week 13 — AWS Fundamentals

<details>
<summary><strong>Expand Week 13</strong></summary>

## Learn

- [ ] Region
- [ ] Availability Zone
- [ ] Edge Location
- [ ] VPC
- [ ] IAM
- [ ] EC2
- [ ] S3
- [ ] RDS
- [ ] ECR
- [ ] CloudWatch
- [ ] ALB
- [ ] Route 53

Understand:

```text
Region
├── AZ-a
├── AZ-b
└── AZ-c
```

### Architecture Exercise

Vẽ:

```text
Internet
 ↓
ALB
 ↓
Application
 ↓
Database
```

### Definition of Done

> Có thể giải thích tại sao AWS architecture cần nhiều AZ.

</details>

---

# 🔑 Week 14 — IAM

<details>
<summary><strong>Expand Week 14</strong></summary>

Learn:

- [ ] User
- [ ] Group
- [ ] Role
- [ ] Policy
- [ ] Permission
- [ ] Trust policy
- [ ] Resource policy

## Principle

> Least Privilege

## Lab

Create:

```text
Developer
   ↓
IAM Role
   ↓
S3
```

Practice:

- [ ] Allow
- [ ] Deny
- [ ] Resource restriction
- [ ] Action restriction

### Security Rule

- [ ] Không dùng root cho workload
- [ ] Không hardcode AWS keys
- [ ] Dùng IAM Role khi có thể

### Definition of Done

> Có thể đọc và tự viết IAM policy đơn giản.

</details>

---

# 🌐 Week 15 — VPC

<details>
<summary><strong>Expand Week 15</strong></summary>

## Learn

- [ ] VPC
- [ ] CIDR
- [ ] Public subnet
- [ ] Private subnet
- [ ] Route table
- [ ] Internet Gateway
- [ ] NAT Gateway
- [ ] Security Group
- [ ] NACL

## Architecture

```text
Internet
   │
   ▼
Public Subnet
   │
   ▼
ALB
   │
   ▼
Private Subnet
   │
   ▼
Application
   │
   ▼
Database
```

### Lab

Create VPC manually.

### Troubleshooting

Simulate:

- [ ] No internet
- [ ] Wrong route
- [ ] Security group block
- [ ] Private subnet unable to access internet

### Definition of Done

> Có thể đọc VPC diagram và biết traffic đi qua đâu.

</details>

---

# 🖥️ Week 16 — EC2 + ECR + ALB + CloudWatch

<details>
<summary><strong>Expand Week 16</strong></summary>

Deploy:

```text
Docker Image
 ↓
ECR
 ↓
EC2
 ↓
ALB
```

Learn:

- [ ] EC2
- [ ] User Data
- [ ] ECR
- [ ] ALB
- [ ] Target Group
- [ ] Health Check
- [ ] CloudWatch Logs
- [ ] CloudWatch Metrics

### Deliverable

Application accessible through:

```text
ALB → EC2 → Docker
```

### Definition of Done

- [ ] Docker image from ECR
- [ ] ALB
- [ ] Health check
- [ ] CloudWatch logs
- [ ] Security groups configured

</details>

---

# PHASE 5 — Terraform + ECS

> **Duration:** Week 17–20

---

# 🏗️ Week 17 — Terraform Fundamentals

<details>
<summary><strong>Expand Week 17</strong></summary>

Learn:

```text
Provider
Resource
Variable
Output
Module
State
```

Commands:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
terraform destroy
```

### Lab

Provision:

```text
EC2
S3
Security Group
```

### Definition of Done

> Infrastructure có thể tạo/xóa bằng code.

</details>

---

# ☁️ Week 18 — Terraform AWS

<details>
<summary><strong>Expand Week 18</strong></summary>

Terraform:

```text
VPC
├── Subnets
├── Route Tables
├── Internet Gateway
├── NAT
├── Security Groups
└── IAM
```

Structure:

```text
terraform/
├── providers.tf
├── main.tf
├── variables.tf
├── outputs.tf
└── modules/
    ├── vpc/
    ├── iam/
    └── security-group/
```

Implement:

- [ ] Variables
- [ ] Outputs
- [ ] Modules
- [ ] Remote state concept
- [ ] State locking concept

### Definition of Done

> Có thể destroy toàn bộ infrastructure rồi recreate bằng Terraform.

</details>

---

# 🚢 Week 19 — ECS + Fargate

<details>
<summary><strong>Expand Week 19</strong></summary>

Learn:

- [ ] ECS Cluster
- [ ] Task Definition
- [ ] Task
- [ ] Service
- [ ] Fargate
- [ ] Container
- [ ] ALB
- [ ] Target Group
- [ ] Health Check

Architecture:

```text
Internet
   │
   ▼
 ALB
   │
 ┌─┴─────────┐
 ▼           ▼
ECS Task   ECS Task
```

### Lab

Deploy Docker application to ECS Fargate.

### Definition of Done

- [ ] ECS service running
- [ ] 2 tasks
- [ ] ALB
- [ ] Health checks
- [ ] Logs

</details>

---

# 🔁 Week 20 — Terraform + ECS + CI/CD

<details>
<summary><strong>Expand Week 20</strong></summary>

Final deployment flow:

```text
Developer
   │
   ▼
GitHub
   │
   ▼
GitHub Actions
   │
   ├── Test
   ├── Security
   └── Docker Build
          │
          ▼
         ECR
          │
          ▼
        ECS
          │
          ▼
         ALB
```

Infrastructure:

```text
Terraform
├── VPC
├── ALB
├── ECS
├── ECR
├── IAM
├── Security Groups
└── CloudWatch
```

### Definition of Done

> `git push` → CI → Docker → ECR → ECS deployment.

</details>

---

# PHASE 6 — Observability + HA + Production

> **Duration:** Week 21–24

---

# 📊 Week 21 — Observability

<details>
<summary><strong>Expand Week 21</strong></summary>

Learn:

```text
Logs
Metrics
Traces
```

Golden Signals:

```text
Latency
Traffic
Errors
Saturation
```

Metrics:

- [ ] CPU
- [ ] Memory
- [ ] Request rate
- [ ] Error rate
- [ ] Latency
- [ ] Redis connections
- [ ] Redis memory

### Troubleshooting Lab

Create artificial:

- [ ] High CPU
- [ ] High memory
- [ ] Slow requests
- [ ] High error rate
- [ ] Redis unavailable

Document:

```text
Symptom
→ Metric
→ Investigation
→ Root Cause
→ Fix
```

### Definition of Done

> Không chỉ nhìn CPU; biết dùng metrics/logs để tìm root cause.

</details>

---

# 📈 Week 22 — Prometheus + Grafana

<details>
<summary><strong>Expand Week 22</strong></summary>

Architecture:

```text
Application
     │
     ▼
  Metrics
     │
     ▼
Prometheus
     │
     ▼
 Grafana
```

Build dashboards:

- [ ] CPU
- [ ] Memory
- [ ] Request Rate
- [ ] Error Rate
- [ ] Latency
- [ ] Redis Health
- [ ] Redis Memory
- [ ] Redis Connections

Alerts:

```text
CPU > 80%
Error rate > 5%
Redis unavailable
Container unhealthy
```

### Definition of Done

> Có dashboard đủ để quan sát application mà không cần SSH vào server.

</details>

---

# 🔀 Week 23 — HA + Deployment Strategy

<details>
<summary><strong>Expand Week 23</strong></summary>

## High Availability

Learn:

- [ ] Replication
- [ ] Failover
- [ ] Health check
- [ ] Redundancy
- [ ] Multi-AZ
- [ ] Auto Scaling
- [ ] Graceful shutdown

## Rolling Deployment

```text
v1 v1 v1
 ↓
v1 v1 v2
 ↓
v1 v2 v2
 ↓
v2 v2 v2
```

## Blue/Green

```text
          ALB
           │
      ┌────┴────┐
      ▼         ▼
    BLUE      GREEN
     v1         v2
```

## Canary

```text
95% → v1
5%  → v2
```

Implement at least:

- [ ] Rolling
- [ ] Blue/Green
- [ ] Rollback
- [ ] Health check
- [ ] Failure simulation

### Definition of Done

> Có thể deploy version mới và rollback khi deployment fail.

</details>

---

# 🏆 Week 24 — FCJ Final Project

<details>
<summary><strong>Expand Week 24</strong></summary>

# Final Project

## Project Direction

> **Highly Available, Observable, Containerized Backend Platform on AWS**

Use:

```text
reluster
```

as the core infrastructure / Redis HA component.

Use concepts learned from:

```text
spfi
```

for:

- Docker
- CI/CD
- Registry
- Production deployment

---

## Target Architecture

```text
                         Internet
                            │
                            ▼
                      CloudFront
                            │
                            ▼
                           ALB
                            │
                 ┌──────────┴──────────┐
                 ▼                     ▼
              ECS #1                ECS #2
                 │                     │
                 └──────────┬──────────┘
                            │
                            ▼
                      Redis Cluster
                     ┌──────┼──────┐
                     ▼      ▼      ▼
                    R1     R2     R3
                            │
                            ▼
                       Prometheus
                            │
                            ▼
                         Grafana
```

---

# CI/CD Architecture

```text
GitHub
   │
   ▼
Pull Request
   │
   ├── Lint
   ├── Unit Test
   ├── Integration Test
   ├── SAST
   └── Dependency Scan
           │
           ▼
         Merge
           │
           ▼
      Docker Build
           │
           ▼
          ECR
           │
           ▼
      ECS Deployment
           │
           ▼
      Health Check
           │
           ▼
        Success
```

---

# Infrastructure as Code

```text
Terraform
│
├── VPC
├── Subnets
├── NAT
├── ALB
├── ECS
├── ECR
├── IAM
├── Security Groups
├── CloudWatch
└── Redis
```

---

# Final Project Requirements

## Infrastructure

- [ ] AWS VPC
- [ ] Multi-AZ
- [ ] Public subnet
- [ ] Private subnet
- [ ] ALB
- [ ] ECS Fargate
- [ ] ECR
- [ ] IAM
- [ ] Security Groups
- [ ] CloudWatch
- [ ] Redis

## IaC

- [ ] Terraform
- [ ] Variables
- [ ] Outputs
- [ ] Modules
- [ ] State management
- [ ] Reproducible infrastructure

## CI/CD

- [ ] Pull Request checks
- [ ] Lint
- [ ] Unit tests
- [ ] Integration tests
- [ ] Security scan
- [ ] Docker build
- [ ] ECR push
- [ ] ECS deployment
- [ ] Rollback

## Observability

- [ ] Prometheus
- [ ] Grafana
- [ ] Metrics
- [ ] Logs
- [ ] Alerts
- [ ] Health checks

## Reliability

- [ ] Redis replication
- [ ] Failover
- [ ] Multi-AZ
- [ ] Auto Scaling
- [ ] Graceful shutdown
- [ ] Deployment rollback

## Security

- [ ] IAM least privilege
- [ ] No hardcoded secrets
- [ ] Private workloads
- [ ] Security groups
- [ ] Container scanning
- [ ] Dependency scanning
- [ ] Secret management

---

# 📚 Documentation Requirements

Project MUST contain:

```text
docs/
├── architecture.md
├── networking.md
├── security.md
├── deployment.md
├── monitoring.md
├── troubleshooting.md
├── disaster-recovery.md
└── decisions.md
```

Also:

```text
README.md
CHANGELOG.md
CONTRIBUTING.md
```

---

# 📝 Architecture Decision Records

For important decisions, create ADRs.

Example:

```text
docs/adr/
├── 001-why-ecs.md
├── 002-why-fargate.md
├── 003-why-terraform.md
├── 004-redis-ha-strategy.md
└── 005-deployment-strategy.md
```

Each ADR:

```text
Context
Decision
Alternatives
Trade-offs
Consequences
```

---

# 🧪 Failure Simulation

Final project must intentionally break things.

## Scenario 1 — ECS Task Failure

```text
Kill Task
↓
ECS detects failure
↓
New Task
↓
ALB health check
↓
Traffic restored
```

- [ ] Test
- [ ] Document
- [ ] Measure recovery time

## Scenario 2 — Redis Failure

```text
Redis node
   ↓
FAIL
   ↓
Failover
   ↓
Application continues
```

- [ ] Test
- [ ] Document
- [ ] Measure recovery

## Scenario 3 — Bad Deployment

```text
v1
 ↓
Deploy v2
 ↓
Health check FAIL
 ↓
Rollback
 ↓
v1
```

- [ ] Test
- [ ] Document

## Scenario 4 — High Traffic

Simulate load.

Measure:

- [ ] CPU
- [ ] Memory
- [ ] Latency
- [ ] Error rate
- [ ] Scaling behavior

---

# 📊 Final Project Metrics

Track:

| Metric                  |     Target |
| ----------------------- | ---------: |
| Deployment success rate |      > 95% |
| Health check success    |      > 99% |
| Rollback time           |    < 5 min |
| CI duration             |   < 10 min |
| Image vulnerability     | 0 Critical |
| Application uptime      |      > 99% |
| Recovery time           | Documented |

> Targets are learning goals, not production SLO commitments.

---

# 🎤 FCJ Presentation Preparation

Prepare a 10–15 minute presentation.

## 1. Problem

What problem are you solving?

## 2. Architecture

Why this architecture?

## 3. Infrastructure

Why:

- ECS?
- Fargate?
- ALB?
- Redis?
- Terraform?

## 4. CI/CD

Show:

```text
Git Push
→ Test
→ Security
→ Build
→ ECR
→ Deploy
```

## 5. Observability

Show Grafana dashboard.

## 6. Failure Demo

Demonstrate:

```text
Kill service
→ Detection
→ Recovery
```

## 7. Deployment Demo

Show:

```text
v1
→ v2
→ health check
→ rollback
```

## 8. Security

Explain:

- IAM
- Secrets
- Private subnet
- Security Groups
- Container scanning

## 9. Cost

Explain:

- ECS/Fargate cost
- NAT Gateway
- ALB
- CloudWatch
- Redis
- ECR

## 10. Lessons Learned

Explain:

- What failed?
- Why?
- How fixed?
- What would you change?

---

# 🧠 Interview Checklist

Before finishing the roadmap, answer these without Google.

## Linux

- [ ] Process vs thread
- [ ] SIGTERM vs SIGKILL
- [ ] systemd
- [ ] Linux permissions
- [ ] CPU load
- [ ] memory usage
- [ ] disk full

## Networking

- [ ] TCP handshake
- [ ] DNS
- [ ] HTTP/HTTPS
- [ ] TLS
- [ ] NAT
- [ ] CIDR
- [ ] subnet
- [ ] routing
- [ ] firewall

## Docker

- [ ] Image vs container
- [ ] Layer
- [ ] Volume
- [ ] Network
- [ ] Multi-stage build
- [ ] ENTRYPOINT vs CMD
- [ ] Docker security

## CI/CD

- [ ] CI vs CD
- [ ] Pipeline
- [ ] Artifact
- [ ] Runner
- [ ] Secret
- [ ] Deployment strategy

## AWS

- [ ] Region
- [ ] AZ
- [ ] VPC
- [ ] IAM
- [ ] EC2
- [ ] ECR
- [ ] ECS
- [ ] ALB
- [ ] CloudWatch
- [ ] S3
- [ ] RDS

## Terraform

- [ ] State
- [ ] Plan
- [ ] Apply
- [ ] Module
- [ ] Variable
- [ ] Output
- [ ] Drift

## ECS

- [ ] Cluster
- [ ] Task
- [ ] Task Definition
- [ ] Service
- [ ] Fargate
- [ ] Health check
- [ ] Auto Scaling

## Observability

- [ ] Logs
- [ ] Metrics
- [ ] Traces
- [ ] Golden signals
- [ ] Alerting
- [ ] Prometheus
- [ ] Grafana

## Reliability

- [ ] HA
- [ ] Failover
- [ ] Replication
- [ ] Backup
- [ ] Recovery
- [ ] RTO
- [ ] RPO

## Deployment

- [ ] Rolling
- [ ] Blue/Green
- [ ] Canary
- [ ] Rollback

---

# 🚫 What NOT to Learn During This 6-Month Roadmap

Avoid scope creep.

- [ ] ❌ Jenkins
- [ ] ❌ Ansible
- [ ] ❌ Kafka
- [ ] ❌ Helm
- [ ] ❌ ArgoCD
- [ ] ❌ Advanced Kubernetes
- [ ] ❌ 30+ AWS services
- [ ] ❌ Complex microservices
- [ ] ❌ Service Mesh

> **Rule:** Nếu technology không trực tiếp giúp hoàn thành project FCJ → postpone.

---

# 🧭 After 6 Months — Kubernetes / EKS

Chỉ bắt đầu Kubernetes sau khi hoàn thành:

```text
Linux
 ↓
Networking
 ↓
Docker
 ↓
CI/CD
 ↓
AWS
 ↓
Terraform
 ↓
ECS
 ↓
Observability
```

Sau đó:

```text
Docker
 ↓
Kubernetes
 ↓
EKS
```

Topics:

- [ ] Pod
- [ ] Deployment
- [ ] Service
- [ ] Ingress
- [ ] ConfigMap
- [ ] Secret
- [ ] Namespace
- [ ] Volume
- [ ] StatefulSet
- [ ] HPA
- [ ] RBAC
- [ ] Helm

---

# 🏁 Final Definition of Done

Sau 6 tháng, roadmap được xem là **DONE** khi bạn có thể:

### Infrastructure

- [ ] Tự thiết kế AWS architecture
- [ ] Tự tạo VPC
- [ ] Tự thiết kế public/private subnet
- [ ] Tự cấu hình IAM
- [ ] Tự deploy ECS

### Containers

- [ ] Tự viết production Dockerfile
- [ ] Optimize image
- [ ] Docker Compose
- [ ] Health check

### CI/CD

- [ ] GitHub Actions
- [ ] Automated testing
- [ ] Security scanning
- [ ] Docker build
- [ ] ECR push
- [ ] ECS deployment

### IaC

- [ ] Terraform
- [ ] Modules
- [ ] State
- [ ] Reproducible infrastructure

### Observability

- [ ] Prometheus
- [ ] Grafana
- [ ] CloudWatch
- [ ] Alerting
- [ ] Troubleshooting

### Reliability

- [ ] HA
- [ ] Failover
- [ ] Scaling
- [ ] Rollback
- [ ] Disaster recovery basics

### Final Project

- [ ] Production architecture
- [ ] Architecture diagram
- [ ] Terraform
- [ ] CI/CD
- [ ] Monitoring
- [ ] Security
- [ ] Failure simulation
- [ ] Documentation
- [ ] Demo
- [ ] Presentation

---

# 🎯 Final Outcome

```text
                 6-MONTH JOURNEY

Month 1
Linux + Networking + Git
        │
        ▼
Month 2
Docker + Compose
        │
        ▼
Month 3
CI/CD + Security
        │
        ▼
Month 4
AWS Core
        │
        ▼
Month 5
Terraform + ECS
        │
        ▼
Month 6
Observability + HA
        │
        ▼
┌───────────────────────────┐
│       FCJ TRACK 2         │
│                           │
│ Cloud + DevOps Project    │
│                           │
│ CI/CD                     │
│ IaC                       │
│ Container                 │
│ AWS                       │
│ ECS                       │
│ Observability             │
│ HA                        │
│ Security                  │
│ Deployment Strategy       │
└───────────────────────────┘
```

> **North Star:** Không phải "biết Docker, AWS, Terraform..." mà là **có khả năng thiết kế → triển khai → tự động hóa → quan sát → troubleshoot → scale → rollback một hệ thống cloud thực tế.**
