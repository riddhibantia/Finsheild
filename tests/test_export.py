import pytest
from finsheild.export import export_all, verify_export


@pytest.fixture
def _isolated_models(tmp_path, monkeypatch):
    """Point ProjectPaths at tmp so export tests never touch real models/."""
    monkeypatch.setenv("FINSHEILD_MODELS_DIR", str(tmp_path / "models"))
    monkeypatch.setenv("FINSHEILD_RESULTS_DIR", str(tmp_path / "results"))
    monkeypatch.setenv("FINSHEILD_FIGURES_DIR", str(tmp_path / "figures"))
    monkeypatch.setenv("FINSHEILD_REPORTS_DIR", str(tmp_path / "reports"))
    return tmp_path


def test_export_all(_isolated_models):
    exported = export_all()
    assert "xgboost" in exported
    assert "baseline" in exported
    assert "anomaly" in exported

def test_verify_export(_isolated_models):
    export_all()
    results = verify_export()
    # At least xgboost and baseline should exist
    assert any(results.values())
    assert results["xgboost/model.joblib"] == True

def test_llm_adapter_exists(_isolated_models):
    export_all()
    results = verify_export()
    assert results["llm/adapter/adapter_config.json"] == True
