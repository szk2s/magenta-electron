from os import path
import json
from magenta.models.performance_rnn import performance_sequence_generator
from magenta.protobuf import generator_pb2
from magenta.protobuf import music_pb2
import magenta.music as mm
from pdb import set_trace

"""
NOTE: MODEL_NAME should be one of below
- performance_with_dynamics
- performance_with_dynamics_and_modulo_encoding
- density_conditioned_performance_with_dynamics
- pitch_conditioned_performance_with_dynamics
- multiconditioned_performance_with_dynamics
"""


BUNDLE_DIR = 'models/'
MODEL_NAME = 'density_conditioned_performance_with_dynamics'
BUNDLE_NAME = MODEL_NAME + '.mag'

bundle = mm.sequence_generator_bundle.read_bundle_file(path.join(BUNDLE_DIR, BUNDLE_NAME))
generator_map = performance_sequence_generator.get_generator_map()
generator = generator_map[MODEL_NAME](checkpoint=None, bundle=bundle)
generator.initialize()
generator_options = generator_pb2.GeneratorOptions()
generator_options.args['temperature'].float_value = 1.0  # Higher is more random; 1.0 is default; 0.8 <= temp <= 2.0
generate_section = generator_options.generate_sections.add(start_time=0, end_time=10)
sequence = generator.generate(music_pb2.NoteSequence(), generator_options)

mm.sequence_proto_to_midi_file(sequence, './tmp/generated.mid')

print(sequence)
