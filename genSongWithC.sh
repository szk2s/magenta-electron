#!/bin/sh
source venv/bin/activate && \
performance_rnn_generate \
--config=multiconditioned_performance_with_dynamics \
--bundle_file=$(pwd)/models/multiconditioned_performance_with_dynamics.mag \
--output_dir=$(pwd)/tmp \
--pitch_class_histogram=[1,0,0,0,0,0,0,0,0,0,0,0] \
--notes_per_second=12 \
--num_outputs=1 \
--num_steps=5000 \

