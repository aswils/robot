# robot

A terminal robot

## Getting Started

Ensure you have the latest node. I recommend
[nvm](https://github.com/nvm-sh/nvm) for node version management.

Clone the repo to your local machine and install the package.

    $ git clone https://github.com/aswils/robot.git
    $ cd robot/
    $ npm install

Several convenience npm scripts are available. In order to run the robot, you
will need to build the package with

    $ npm run build

## Controlling Your Robot

Begin by simply calling your robot in the terminal

    $ robot

Enter the size of your robots playing field

    5 5

and the initial position. The position is array indexed and can either be
facing N, E, S, or W

    1 2 N

Finally, telling your robot where to move. The robot can turn L or R and move
one space F.

    RFRFFRFRF

See where your robot has landed!
