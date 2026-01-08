# API Documentation

## Overview

This platform is designed for browser-based breathing research with optional hardware integration.

## Core Features

### 1. Breathing Pacer

Provides validated 0.1 Hz (6 breaths per minute) breathing guidance.

**Features:**
- Visual breathing circle animation
- Audio cues at phase transitions
- Progress ring showing cycle completion
- Real-time breath counting

### 2. Session Management

Tracks breathing sessions with timestamps and metrics.

**Data Collected:**
- Session duration
- Breath count
- Compliance metrics
- Simulated HRV values (demo version)

### 3. Research Dashboard

Interface for researchers to:
- View participant statistics
- Create protocols
- Export data
- Monitor compliance

## Hardware Integration (Optional)

### PranaFlow Device

Nostril-specific airflow measurement system.

**Connection:** Web Serial API (Chrome/Edge only)

**Data Format:**
```
L:123.45,R:678.90,LI:0.45
```

Where:
- L = Left nostril pressure
- R = Right nostril pressure  
- LI = Laterality Index (-1 to +1)

### Prana Shirt

Wearable respiratory monitoring system.

**Connection:** Web Bluetooth API

**Measurements:**
- Chest expansion
- Diaphragmatic movement
- Breath depth
- Posture angle

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari |
|---------|--------|------|---------|--------|
| Breathing Pacer | ✅ | ✅ | ✅ | ✅ |
| Session Management | ✅ | ✅ | ✅ | ✅ |
| Web Serial (PranaFlow) | ✅ | ✅ | ❌ | ❌ |
| Web Bluetooth (Prana Shirt) | ✅ | ✅ | ⚠️ | ⚠️ |

## Support

For technical questions or collaboration:
- Email: satyamtiwaript@gmail.com
- GitHub: https://github.com/yourusername/slow-breathing-platform
