# subscriptions-client

FeathersJS + Sequelize service for Euler Tools subscriptions, with a CDK GitHub → ECR pipeline. Archived snapshot, as-is.

This tree is a **new public commit** with no git history. The original private archive is `eulertools/subscriptions-client-archive`.

## What was built (EN)

`services/` is a Feathers app (`subscriptions` + `subscriptions-logs` models, Postgres). `pipelines/` builds and pushes a Docker image. Database URL, RDS password, and AWS secret id belonged in `.env` and are **not** in this snapshot (see `services/.env.example`). Local Postgres DSN in `config/default.json` is a placeholder. CDK branch selector uses `CDK_DEV_ACCOUNT` instead of a hardcoded account id.

No contract deployments.

## Qué se construyó (ES)

Servicio Feathers de suscripciones y pipeline CDK. Sin secretos de RDS. Sin deployments de contratos.

---

## Notice / Aviso

**Euler Tools ha cerrado. Euler Tools is closed.**

La empresa quebró. Este repositorio está archivado y no se mantiene. El software se ofrece tal cual (as is), sin garantía ni soporte. Parte del material puede ser reclamado por acreedores.

The company went bankrupt. This repository is archived and unmaintained. Software is provided as is, with no warranty and no support. Some material may be claimed by creditors.

Site: https://euler.tools  
Org: https://github.com/eulertools  
Enquiries: https://sinequix.com · https://github.com/tebayoso
