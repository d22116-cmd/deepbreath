// Session Manager - Simplified for demo
export class SessionManager {
    constructor() {
        this.isActive = false;
        this.sessionData = [];
        this.sessionId = null;
        this.startTime = null;
    }
    
    start() {
        this.isActive = true;
        this.sessionId = 'session_' + Date.now();
        this.startTime = Date.now();
        this.sessionData = [];
        console.log('Session started:', this.sessionId);
    }
    
    stop() {
        this.isActive = false;
        console.log('Session stopped:', this.sessionId);
    }
    
    addDataPoint(type, data) {
        if (!this.isActive) return;
        
        this.sessionData.push({
            timestamp: Date.now(),
            type: type,
            data: data
        });
    }
    
    getData() {
        return {
            sessionId: this.sessionId,
            startTime: this.startTime,
            duration: Date.now() - this.startTime,
            dataPoints: this.sessionData
        };
    }
    
    reset() {
        this.sessionData = [];
        this.sessionId = null;
        this.startTime = null;
    }
}
