# Donut
Github action for time-based prevention of workflows and deploys (eg. Fridays after 5pm). Useful for continuous deployment workflows and moratoriums.

# Roadmap
- Time support (eg. after 5pm, 3pm-5pm)
- Locales
- Remote sources (eg. Google/Outlook Calendar)

# Example usage
```
- name: donut
  uses: kwngo/donut@v1
  with:
    days: 'monday,wednesday,friday'
    timezone: 'America/New_York'
- name: Install dependency
  if: steps.donut.outputs.cancel == 'true'
  run: ...
```

