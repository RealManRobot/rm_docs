import sys
import os

# Add the parent directory of src to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from core.demo_double_robotic_arm import *

if __name__ == "__main__":
    main()
