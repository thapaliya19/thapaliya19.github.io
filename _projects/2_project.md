---
layout: page
title: Lower Limb Angle Measurement
description: Bone segmentation, landmark detection and angle measurement
importance: 2
category: work
---

- Segmentation, landmark detection, and angle measurement for corrective osteotomy.
- CT scans of the lower limbs were used to segment out parts of pelvis, femur, and tibia bones.
- These segmentations are then used to detect the important landmarks required to measure relevant angles for corrective osteotomy.
- Trained and deployed UNet and nnUNet for bone segmentation, and angle measurement.
- Implemented code to convert 3d segmentation masks predicted by the models to 3D meshes and save these volumes in stl format.
- Set-up an deployment environment using Flask and Docker, to deploy the trained models for segmentation and angle measurement.
- This project was done at [NAAMII](https://www.naamii.org.np/projects/ai-assisted-microscopy/).
- *Collaborator*
    - [Manish Dhakal](https://manishdhakal.com.np/)
- *Supervisor*
    - [Taman Upadhaya, Ph.D.](https://scholar.google.com/citations?user=RuVA5rUAAAAJ)
