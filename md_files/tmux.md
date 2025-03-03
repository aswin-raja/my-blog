# Tmux Configuration

## Start a new Session

```bash
tmux
```

or

```bash
tmux new -s <-session name->
```

## List all Tmux Sessions

```bash
tmux ls
```


## Attach to an existing Session

```bash
tmux attach -t <-session name->
```

## Dettach the current opened session

Press `Ctrl b` the `d`

## Kill a Session

```bash
tmux kill-session -t <-session name->
```
