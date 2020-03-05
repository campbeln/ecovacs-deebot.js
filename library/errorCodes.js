const CODES = {
    '100': 'NoError: Robot is operational',
    '101': 'BatteryLow: Low battery',
    '102': 'HostHang: Robot is off the floor',
    '103': 'WheelAbnormal: Driving Wheel malfunction',
    '104': 'DownSensorAbnormal: Excess dust on the Anti-Drop Sensors',
    '105': 'Stuck: Robot is stuck',
    '106': 'SideBrushExhausted: Side Brushes have expired',
    '107': 'DustCaseHeapExhausted: Dust case filter expired',
    '108': 'SideAbnormal: Side Brushes are tangled',
    '109': 'RollAbnormal: Main Brush is tangled',
    '110': 'NoDustBox: Dust Bin Not installed',
    '111': 'BumpAbnormal: Bump sensor stuck',
    '112': 'LDS: LDS "Laser Distance Sensor" malfunction',
    '113': 'MainBrushExhausted: Main brush has expired',
    '114': 'DustCaseFilled: Dust bin full',
    '115': 'BatteryError:',
    '116': 'ForwardLookingError:',
    '117': 'GyroscopeError:',
    '118': 'StrainerBlock:',
    '119': 'FanError:',
    '120': 'WaterBoxError:',
    '201': 'AirFilterUninstall:',
    '202': 'UltrasonicComponentAbnormal',
    '203': 'SmallWheelError',
    'UNKNOW': 'unknown'
};

module.exports = CODES;