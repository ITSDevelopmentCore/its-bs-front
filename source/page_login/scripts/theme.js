export default function setTheme(event, checked)
{
    if (checked)
    {
        setNightTheme();
    } else {
        setDayTheme();
    }
}

function setDayTheme()
{
    document.documentElement.classList.remove("dark");
}

function setNightTheme()
{
    document.documentElement.classList.add("dark");
}