#!/bin/sh

cd /home/djangulo/Documents/ec-front
ng build --prod

fab deploy:host=caedroco@caedro.com