# Locale and Shell Configuration

## Set Locale Environment Variable
This section explains setting the `LC_ALL` environment variable to `C`, a standard locale that ensures consistent behavior across different systems. It is commonly used to avoid locale-related issues during script execution.

## Generate Locale
This section describes generating the `en_US.UTF-8` locale, which is a widely used locale for English (United States) with UTF-8 encoding. Ensuring this locale is generated guarantees system support for it.

## Reconfigure Locales
This section covers reconfiguring the system's locale settings. A dialog will open where you can select the desired locales to be generated and set as the default.

1. When the dialog opens, select `<ok>` to proceed.
2. Then, select `en_US.UTF-8` from the list of available locales and press `<ok>` to confirm.

## Reconfigure Dash
This section explains reconfiguring the default system shell. A dialog will open where you can choose whether to use `dash` as the default system shell.

1. When the dialog opens, select `<No>` and press Enter. This will set `bash` as the default system shell instead of `dash`.
