#!/bin/sh
source venv/bin/activate && \
performance_rnn_generate \
--config=performance_with_dynamics_and_modulo_encoding \
--bundle_file=$(pwd)/models/performance_with_dynamics_and_modulo_encoding.mag \
--output_dir=$(pwd)/tmp \
--num_outputs=1 \
--num_steps=5000 \
--primer_midi=$(pwd)/assets/clair_de_lune_short.mid