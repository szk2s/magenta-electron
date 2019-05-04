import sys
import json
from magenta.version import __version__
print('Python Version:', sys.version)
print('Magenta Version:', __version__)
print('Path to Python Executable:', sys.executable)
print(json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}]))
print('Args from Parent Process:', sys.argv)
sys.stdout.flush()
