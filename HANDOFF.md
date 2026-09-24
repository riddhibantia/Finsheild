# Finsheild — Handoff Document

**For whoever picks this up next (human or AI agent).**

## Current state

Repo: `https://github.com/riddhibantia/Finsheild` (public, MIT) — single repo.
Branch: `main`. Layout: ML core (`src/finsheild/`) + app (`backend/` FastAPI, `frontend/` Next.js) + `models/` + `evaluation/`.

### What's done (215 passing: 208 ML core + 7 backend API)

- **ML core**: 5-signal fusion (XGBoost 0.35, IsolationForest 0.20, rules 0.20, behavioral 0.15, graph 0.10) → GREEN/YELLOW/RED. Real ULB benchmark: ROC-AUC 0.9709, PR-AUC 0.8418 (`evaluation/reports/xgboost_report.md`).
- **Synthetic env + features + finetune (QLoRA) + export**: all under `src/finsheild/`, covered by `tests/`.
- **App**: `backend/main.py` (13 endpoints incl. Cashfree webhooks, `backend/tests/test_api.py`), `frontend/` (5 routes). Backend auto-discovers repo root; `FINSHEILD_CORE_PATH` overrides. Launch: `bash start_app.sh`.

### Test isolation rule (do not break)

`src/finsheild/config.py` paths are env-overridable (`FINSHEILD_MODELS_DIR`, `FINSHEILD_RESULTS_DIR`, `FINSHEILD_FIGURES_DIR`, `FINSHEILD_REPORTS_DIR`). Tests MUST write to tmp dirs — never to tracked `models/xgboost/*` or `evaluation/reports/*_metrics.json` / `*_report.md` (real ULB numbers live there).

```bash
pytest tests/ -q           # ML core (208)
pytest backend/tests/ -q   # API (7) — needs repo root + src on PYTHONPATH
pytest -q                  # everything (215)
```

## Environment notes

- **Python**: 3.10+ (developed on 3.10/3.11; `pyproject.toml` says `>=3.10`).
- **Local**: dev box, CPU-only. Heavy training/QLoRA runs belong in Colab (see `notebooks/colab/`).
- **Tracked but gitignored-shaped**: `models/xgboost/{model.joblib,scaler.joblib,threshold.json,feature_columns.json}` are force-tracked real artifacts (see `.gitignore` exceptions). Never overwrite them with test output.

## Things to NOT do

- Don't point docs/UI at the old `Finsheild-App` repo — it was merged into this repo and removed.
- Don't commit `.joblib`, `data/raw/`, `evaluation/figures/`, `node_modules/`, `frontend/dist/` (all ignored).
- Don't let the LLM copilot set risk scores — it explains evidence only.
- One concern per commit; never commit test-clobbered benchmark files (check `git status` + `git diff --stat` first).
