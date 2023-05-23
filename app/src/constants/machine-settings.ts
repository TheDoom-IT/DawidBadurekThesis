import { FileLoadingFailedException } from '../exceptions/file-loading-failed-exception';
import machineSettingsFile from '../static/machine-settings.json';
import { MachineSettings, machineSettingsSchema } from '../schemas/machine-settings-schema';

const result = machineSettingsSchema.safeParse(machineSettingsFile);

if (!result.success) {
    throw new FileLoadingFailedException(
        `Cannot read a settings file. It has an unsupported format: ${result.error}.`,
    );
}

export const machineSettings: MachineSettings = result.data;
