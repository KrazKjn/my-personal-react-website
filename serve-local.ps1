param (
    [string]$mode = "default"
)

function Update-Version {
    $packagePath = ".\package.json"
    if (-Not (Test-Path $packagePath)) {
        Write-Host "package.json not found: $packagePath" -ForegroundColor Red
        exit 1
    }

    $json = Get-Content $packagePath -Raw | ConvertFrom-Json

    $currentVersion = $json.version
    Write-Host "Current version: $currentVersion" -ForegroundColor Yellow

    $parts = $currentVersion.Split('.')
    if ($parts.Count -ne 3) {
        Write-Host "Version format must be Major.Minor.Patch (e.g., 1.0.0)" -ForegroundColor Red
        exit 1
    }

    $parts[2] = [int]$parts[2] + 1
    $newVersion = "$($parts[0]).$($parts[1]).$($parts[2])"

    $json.version = $newVersion
    $json | ConvertTo-Json -Depth 10 | Set-Content $packagePath -Encoding UTF8

    Write-Host "Updated version to: $newVersion" -ForegroundColor Green

    Set-Content .env "REACT_APP_VERSION=$newVersion"
}

function Publish-Site {
    Write-Host "Publishing React app..." -ForegroundColor Cyan
    npm run deploy
}

function Build-Site {
    Write-Host "Building React app (Local Testing)..." -ForegroundColor Cyan
    npm run build
}

function Run-Server {
    Write-Host "Starting local server at http://localhost:5174/my-personal-react-website/" -ForegroundColor Green
    try {
        # Run React app in PowerShell
        npm start
    }
    finally {
        # Revert to parent folder after server exits
    }
}

switch ($mode.ToLower()) {
    "build" {
        Build-Site
    }
    "run" {
        Run-Server
    }
    "publish" {
        Update-Version
        Publish-Site
    }
    "set-version" {
        Update-Version
    }
    default {
        Build-Site
        Run-Server
    }
}
