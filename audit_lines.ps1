$files = Get-ChildItem -Recurse -File -Include *.css, *.js, *.html | Sort-Object FullName

$results = foreach ($f in $files) {
    $lines = (Get-Content $f.FullName).Count
    [PSCustomObject]@{
        Path = $f.FullName.Replace((Get-Location).Path + "\", "")
        Lines = $lines
        Status = if ($lines -lt 400) { "OK (<400)" } else { "EXCEEDS (>=400)" }
    }
}

$results | Format-Table -AutoSize
$bad = $results | Where-Object { $_.Lines -ge 400 }
if ($bad) {
    Write-Host "`nWARNING: The following files exceed 399 lines:" -ForegroundColor Red
    $bad | Format-Table -AutoSize
} else {
    Write-Host "`nALL SOURCE CODE FILES COMPLY WITH < 400 LINES REQUIREMENT!" -ForegroundColor Green
}
