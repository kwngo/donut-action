# Donut
Github action for time-based prevention of deploys (eg. Fridays after 5pm) 

# Example
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

